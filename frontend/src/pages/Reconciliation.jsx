import React, { useState } from "react";
import { Box, Button, Typography, Accordion, AccordionSummary, AccordionDetails, Table, TableHead, TableRow, TableCell, TableBody, Paper } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

// dummy data, change with backend once done
const sampleData = [
  {
    tradeId: "T001",
    differences: [
      { field: "price", systemA: 100, systemB: 102 },
      { field: "quantity", systemA: 50, systemB: 50 },
    ],
  },
  {
    tradeId: "T002",
    differences: [
      { field: "price", systemA: 200, systemB: 200 },
      { field: "quantity", systemA: 30, systemB: 25 },
    ],
  },
];

export default function Reconciliation() {
  const [lastRun] = useState({
    runId: "RUN-20250730-01",
    timestamp: new Date().toLocaleString(),
  });

  const matchedCount = sampleData.filter((group) => group.differences.every((d) => d.systemA === d.systemB)).length;
  const unmatchedCount = sampleData.length - matchedCount;

  return (
    <Box p={3} maxWidth="800px" mx="auto">
      <Typography variant="h4" gutterBottom>
        Reconciliation
      </Typography>

      <Button variant="contained" color="primary">
        Run Reconciliation
      </Button>

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

      {sampleData.map((group) => (
        <Accordion key={group.tradeId}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>
              Trade ID: <strong>{group.tradeId}</strong> — {group.differences.some((d) => d.systemA !== d.systemB) ? "⚠️ Differences found" : "✅ All fields match"}
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
                  {group.differences.map(({ field, systemA, systemB }) => (
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
                  ))}
                </TableBody>
              </Table>
            </Paper>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
}
