import React, { useState, useEffect } from 'react';
import useWorkoutStore from '../../stores/UseWorkoutStore';

const WorkoutLogger = () => {
  const addWorkout = useWorkoutStore((state) => state.addWorkout);
  const fetchExercises = useWorkoutStore((state) => state.fetchExercises);
  const exercises = useWorkoutStore((state) => state.exercises);

  const [selectedExercise, setSelectedExercise] = useState('');
  const [sets, setSets] = useState('');
  const [reps, setReps] = useState('');
  const [weight, setWeight] = useState('');

  useEffect(() => {
    fetchExercises();
  }, [fetchExercises]);

  const handleAddWorkout = () => {
    const newWorkout = {
      timestamp: new Date().toISOString(),
      exercises: [
        {
          name: selectedExercise,
          sets,
          reps,
          weight,
        },
      ],
    };
    addWorkout(newWorkout);
    setSelectedExercise('');
    setSets('');
    setReps('');
    setWeight('');
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white shadow-md rounded-md">
      <h2 className="text-xl font-semibold mb-4">Log Workout</h2>
      
      <div className="mb-4">
        <label className="block text-gray-700">Exercise</label>
        <select
          value={selectedExercise}
          onChange={(e) => setSelectedExercise(e.target.value)}
          className="w-full p-2 border rounded"
        >
          <option value="" disabled>Select Exercise</option>
          {exercises.map((exercise) => (
            <option key={exercise.id} value={exercise.name}>
              {exercise.name}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">Sets</label>
        <input
          type="number"
          placeholder="Sets"
          value={sets}
          onChange={(e) => setSets(e.target.value)}
          className="w-full p-2 border rounded"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">Reps</label>
        <input
          type="number"
          placeholder="Reps"
          value={reps}
          onChange={(e) => setReps(e.target.value)}
          className="w-full p-2 border rounded"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">Weight (kg)</label>
        <input
          type="number"
          placeholder="Weight"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          className="w-full p-2 border rounded"
        />
      </div>

      <button
        onClick={handleAddWorkout}
        className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
      >
        Add Workout
      </button>
    </div>
  );
};

export default WorkoutLogger;
