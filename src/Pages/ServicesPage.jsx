import React, { useEffect, useState } from 'react';
import DataTable from '../Components/Table';
import { getServiceList } from '../api/services';
import { Box, Container, Typography } from '@mui/material';


const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        const fetchServiceList = async () => {
            try {
                const response = await getServiceList();
                setServices(response.data.data);

            } catch (error) {
                console.error('Error fetching product list:', error);
            }
        };
        fetchServiceList();
    }, []);

    const deleteServviceHandler = (id) => {
        console.log('Deleting product with ID:', id);
        const filteredServices = services.filter((service) => service.id !== id);
        setServices(filteredServices);
    };

    return (
        <>
          <Box mt={25} sx={{ direction: "rtl", width: "60%", marginLeft: "10%" }}>
            <Container>
    
              <Box mt={2} sx={{ backgroundColor: "rgba(4, 28, 55, 0.5)", display: "flex", color: "rgba(255, 255, 255, 1)", width: { xs: "16%", md: "9%" }, padding: "3px", height: "23px" }}>
                <Box ml={1}>
                  <svg width="5" height="23" viewBox="0 0 5 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="0.208008" width="4" height="23" fill="url(#paint0_linear_29_3859)" />
                    <defs>
                      <linearGradient id="paint0_linear_29_3859" x1="0.0946058" y1="4.98333" x2="5.15124" y2="5.04578" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#FFB629" />
                        <stop offset="0.507189" stop-color="#FFDA56" />
                        <stop offset="1" stop-color="#FFD7A6" />
                      </linearGradient>
                    </defs>
                  </svg>
                </Box>
                <Typography sx={{ fontSize: "1rem", fontFamily: 'Rubik' }} > خدماتنا</Typography>
              </Box>
              <Typography variant='h4' sx={{ color: "rgba(9, 18, 66, 1)", fontFamily: "'Rubik', sans-serif" }}>قائمة الخدمات</Typography>
              <DataTable data={services} onDeleteData={deleteServviceHandler} />
            </Container>
        </Box>
    
        </>
      );
};

export default Services;
