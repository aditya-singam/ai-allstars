import React, { useState } from 'react';
import { Box, Typography, Radio, RadioGroup, FormControlLabel, FormControl, Button, Paper, Alert } from '@mui/material';

const Quiz = ({ quizData }) => {
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerSelect = (questionId, value) => {
    setSelectedAnswers(prev => ({
      ...prev,
      [questionId]: value
    }));
  };

  const isQuizComplete = () => {
    return Object.keys(selectedAnswers).length === quizData.questions.length;
  };

  const handleSubmit = () => {
    let correctAnswers = 0;
    quizData.questions.forEach((question) => {
      if (selectedAnswers[question.id] === question.correctAnswer) {
        correctAnswers++;
      }
    });
    setScore((correctAnswers / quizData.questions.length) * 100);
    setShowResults(true);
  };

  const handleRetry = () => {
    setSelectedAnswers({});
    setShowResults(false);
    setScore(0);
  };

  return (
    <Box sx={{ mt: 3 }}>
      <Typography variant="h5" gutterBottom color="primary">
        Quiz: {quizData.title}
      </Typography>
      
      {quizData.questions.map((question) => (
        <Paper key={question.id} sx={{ p: 3, mb: 2 }}>
          <Typography variant="h6" gutterBottom>
            {question.question}
          </Typography>
          <FormControl component="fieldset" fullWidth>
            <RadioGroup
              value={selectedAnswers[question.id] || ''}
              onChange={(e) => handleAnswerSelect(question.id, e.target.value)}
            >
              {question.options.map((option, index) => (
                <FormControlLabel
                  key={index}
                  value={option}
                  control={<Radio />}
                  label={option}
                  disabled={showResults}
                  sx={{
                    ...(showResults && option === question.correctAnswer && {
                      color: 'success.main',
                      '& .MuiRadio-root': {
                        color: 'success.main',
                      }
                    }),
                    ...(showResults && 
                      selectedAnswers[question.id] === option && 
                      option !== question.correctAnswer && {
                        color: 'error.main',
                        '& .MuiRadio-root': {
                          color: 'error.main',
                        }
                    })
                  }}
                />
              ))}
            </RadioGroup>
          </FormControl>
          {showResults && (
            <Box sx={{ mt: 2 }}>
              <Alert 
                severity={selectedAnswers[question.id] === question.correctAnswer ? "success" : "error"}
                sx={{ mb: 1 }}
              >
                {selectedAnswers[question.id] === question.correctAnswer 
                  ? "Correct!" 
                  : `Incorrect. The correct answer is: ${question.correctAnswer}`}
              </Alert>
              <Typography sx={{ mt: 1, color: 'text.secondary' }}>
                {question.explanation}
              </Typography>
            </Box>
          )}
        </Paper>
      ))}

      <Box sx={{ mt: 3, display: 'flex', gap: 2, alignItems: 'center' }}>
        {!showResults ? (
          <Button 
            variant="contained" 
            onClick={handleSubmit}
            disabled={!isQuizComplete()}
            color="primary"
            sx={{ minWidth: 120 }}
          >
            {isQuizComplete() ? 'Submit Quiz' : `Answer all ${quizData.questions.length} questions`}
          </Button>
        ) : (
          <>
            <Typography variant="h6" sx={{ color: score === 100 ? 'success.main' : 'primary.main' }}>
              Your Score: {score}%
            </Typography>
            <Button 
              variant="outlined" 
              onClick={handleRetry}
              color="primary"
            >
              Try Again
            </Button>
          </>
        )}
      </Box>
    </Box>
  );
};

export default Quiz; 