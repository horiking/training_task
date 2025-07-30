// src/pages/Reconciliation.jsx
import React, { useState } from "react";
import { Box, Button, Typography, Accordion, AccordionSummary, AccordionDetails, Table, TableHead, TableRow, TableCell, TableBody, Paper, CircularProgress } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import { startReconciliation, getReconciliationStatus, getReconciliationDifferences } from "../services/reconciliationService";

export default function Reconciliation() {
  const [lastRun, setLastRun] = useState(null);
  const [groups, setGroups] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleRun = async () => {
    setLoading(true);
    try {
      // 1) kick off a new run
      const runId = await startReconciliation();
      const timestamp = new Date().toLocaleString();
      setLastRun({ runId, timestamp });

      // 2) poll status until COMPLETED
      let status = await getReconciliationStatus(runId);
      while (status !== "COMPLETED") {
        await new Promise((r) => setTimeout(r, 1000));
        status = await getReconciliationStatus(runId);
      }

      // 3) fetch differences
      const diffs = await getReconciliationDifferences(runId);

      // 4) group by tradeId
      const map = {};
      diffs.forEach(({ tradeId, fieldName, valueSystemA, valueSystemB }) => {
        if (!map[tradeId]) {
          map[tradeId] = { tradeId, differences: [] };
        }
        map[tradeId].differences.push({
          field: fieldName,
          systemA: valueSystemA,
          systemB: valueSystemB,
        });
      });
      setGroups(Object.values(map));
    } catch (err) {
      console.error("Reconciliation error:", err);
    } finally {
      setLoading(false);
    }
  };

  // count matched/unmatched
  const matchedCount = groups.filter((g) => g.differences.length === 0).length;
  const unmatchedCount = groups.length - matchedCount;

  return (
    <Box p={3} maxWidth="800px" mx="auto">
      <Typography variant="h4" gutterBottom>
        Reconciliation
      </Typography>

      <Button variant="contained" color="primary" onClick={handleRun} disabled={loading}>
        {loading ? <CircularProgress size={24} /> : "Run Reconciliation"}
      </Button>

      {lastRun && (
        <Box mt={2} mb={4}>
          <Typography variant="subtitle2" color="textSecondary">
            Last run: {lastRun.runId} ({lastRun.timestamp})
          </Typography>
          <Typography component="span" mr={2}>
            Matched groups: <strong>{matchedCount}</strong>
          </Typography>
          <Typography component="span">
            Unmatched groups: <strong>{unmatchedCount}</strong>
          </Typography>
        </Box>
      )}

      {groups.map((group) => (
        <Accordion key={group.tradeId}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>
              Trade ID: <strong>{group.tradeId}</strong> — {group.differences.length > 0 ? "⚠️ Differences found" : "✅ All fields match"}
            </Typography>
          </AccordionSummary>

          <AccordionDetails>
            <Paper elevation={0} sx={{ width: "100%", overflowX: "auto" }}>
              <Table size="small">
                <TableHead>
                  <TableRow>
                    <TableCell>Field</TableCell>
                    <TableCell align="right">System A</TableCell>
                    <TableCell align="right">System B</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {group.differences.length > 0 ? (
                    group.differences.map(({ field, systemA, systemB }) => (
                      <TableRow key={field}>
                        <TableCell>{field}</TableCell>
                        <TableCell
                          align="right"
                          sx={{
                            fontWeight: systemA !== systemB ? "bold" : "normal",
                            color: systemA !== systemB ? "error.main" : "inherit",
                          }}
                        >
                          {systemA}
                        </TableCell>
                        <TableCell
                          align="right"
                          sx={{
                            fontWeight: systemA !== systemB ? "bold" : "normal",
                            color: systemA !== systemB ? "error.main" : "inherit",
                          }}
                        >
                          {systemB}
                        </TableCell>
                      </TableRow>
                    ))
                  ) : (
                    <TableRow>
                      <TableCell colSpan={3} align="center">
                        No differences
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </Paper>
          </AccordionDetails>
        </Accordion>
      ))}

      {!lastRun && !loading && (
        <Typography variant="body2" color="textSecondary" mt={2}>
          Click “Run Reconciliation” to start.
        </Typography>
      )}
    </Box>
  );
}
