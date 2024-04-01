import React from 'react';
import { Link } from 'react-router-dom';
import { Typography, Button, Container, Grid, Paper } from '@mui/material';

const ViewLecturesPage = () => {
    return (
        <Container maxWidth="md" sx={{ paddingTop: '20px' }}>
            <Typography variant="h4" component="h1" gutterBottom>
                View Lectures
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                    <Paper sx={{ p: 2, textAlign: 'center', height: '100%' }}>
                        <Typography variant="h6" component="h2" gutterBottom>
                            Mathematics
                        </Typography>
                        <Link to="/view-lectures-ml" style={{ textDecoration: 'none' }}>
                            <Button variant="contained" color="primary">
                                View Mathematics Lectures
                            </Button>
                        </Link>
                    </Paper>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Paper sx={{ p: 2, textAlign: 'center', height: '100%' }}>
                        <Typography variant="h6" component="h2" gutterBottom>
                           Social  Science
                        </Typography>
                        <Link to="/view-lectures-cn" style={{ textDecoration: 'none' }}>
                            <Button variant="contained" color="primary">
                                View Social Science Lectures
                            </Button>
                        </Link>
                    </Paper>
                </Grid>
            </Grid>
        </Container>
    );
};

export default ViewLecturesPage;
