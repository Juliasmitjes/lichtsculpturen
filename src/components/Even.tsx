import React from 'react';
import { Button } from '../components/ui/button';
import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect  } from 'react';

const Even = () => {

  const navigate = useNavigate();
    useEffect(() => {
    window.scrollTo(0, 0);
    }, []);


return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-business font-bold mb-4">Product niet gevonden</h1>
          <Button onClick={() => navigate('/')} variant="default">
            Terug naar overzicht
          </Button>
        </div>
      </div>
    );
  }

export default Even