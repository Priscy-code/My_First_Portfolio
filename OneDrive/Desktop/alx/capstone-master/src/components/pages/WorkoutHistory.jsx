import React from 'react';
import useWorkoutStore from '../../stores/UseWorkoutStore';

const WorkoutHistory = () => {
  const workouts = useWorkoutStore((state) => state.workouts);

  return (
    <div className="max-w-md mx-auto p-4 bg-white shadow-md rounded-md mt-6">
      <h2 className="text-xl font-semibold mb-4">Workout History</h2>
      {workouts.length === 0 ? (
        <p className="text-gray-500">No workouts logged yet.</p>
      ) : (
        <ul className="divide-y divide-gray-200">
          {workouts.map((workout, index) => (
            <li key={index} className="py-2">
              <strong>{new Date(workout.timestamp).toLocaleDateString()}</strong>
              <ul className="ml-4">
                {workout.exercises.map((ex, idx) => (
                  <li key={idx} className="text-gray-700">
                    {ex.name} - {ex.sets} sets, {ex.reps} reps, {ex.weight} kg
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default WorkoutHistory;
