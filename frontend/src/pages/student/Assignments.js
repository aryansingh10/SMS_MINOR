import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSubjectList } from "../../redux/sclassRelated/sclassHandle";
import { Table, TableBody, TableHead, Typography, Input } from "@mui/material";

import { StyledTableCell, StyledTableRow } from "../../components/styles";
import { Link, useNavigate } from "react-router-dom";

const Assignments = () => {
  const subjectAssignments = [
    {
      title: "Assignment-1",
      deadline: "04/04/2024",
      url: "https://drive.google.com/file/d/1rbEnoNxQWuf5BlieybGC44e0hj2LQhxL/view?usp=sharing",
    },
    {
      title: "Assignment-2",
      deadline: "07/04/2024",
      url: "https://drive.google.com/file/d/1rbEnoNxQWuf5BlieybGC44e0hj2LQhxL/view?usp=sharing",
    },
  ];
  return (
    <>
      <Typography variant="h4" align="center" gutterBottom>
        Subject Marks
      </Typography>

      <Table>
        <TableHead>
          <StyledTableRow>
            <StyledTableCell>Subject</StyledTableCell>
            <StyledTableCell>Deadline</StyledTableCell>
            <StyledTableCell>Link</StyledTableCell>
          </StyledTableRow>
        </TableHead>
        <TableBody>
          {subjectAssignments.map((result, index) => {
            return (
              <StyledTableRow key={index}>
                <StyledTableCell>{result.title}</StyledTableCell>
                <StyledTableCell>{result.deadline}</StyledTableCell>
                <StyledTableCell>
                    <Link to={result.url} download={result.title}>
                        Download {result.title} 
                    </Link>
                </StyledTableCell>
              </StyledTableRow>
            );
          })}
        </TableBody>
      </Table>
    </>
  );
};

export default Assignments;
