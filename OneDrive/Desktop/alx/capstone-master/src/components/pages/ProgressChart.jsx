// import React, { useState, useEffect, useRef } from 'react';
// import { Line } from 'react-chartjs-2';

// const Tracking = () => {
//    const [workouts, setWorkouts] = useState([]);
//    const [weight, setWeight] = useState('');
//    const [reps, setReps] = useState('');
//    const [sets, setSets] = useState('');
//    const chartRef = useRef(null);  // Reference for the chart

//    const addWorkout = () => {
//        const newWorkout = {
//            weight: parseFloat(weight),
//            reps: parseInt(reps),
//            sets: parseInt(sets),
//            date: new Date(),
//        };
//        setWorkouts([...workouts, newWorkout]);
//        setWeight('');
//        setReps('');
//        setSets('');
//    };

//    const totalWeightLifted = workouts.reduce((total, workout) => total + (workout.weight * workout.reps * workout.sets), 0);
//    const averageReps = workouts.length ? (workouts.reduce((total, workout) => total + workout.reps, 0) / workouts.length).toFixed(2) : 0;
//    const totalWorkouts = workouts.length;

//    const data = {
//        labels: workouts.map(workout => workout.date.toLocaleDateString()),
//        datasets: [{
//            label: 'Total Weight Lifted',
//            data: workouts.map(workout => workout.weight * workout.reps * workout.sets),
//            borderColor: 'rgba(75, 192, 192, 1)',
//            backgroundColor: 'rgba(75, 192, 192, 0.2)',
//        }],
//    };

//    useEffect(() => {
//        // Cleanup the chart instance on unmount to avoid the "Canvas is already in use" error
//        return () => {
//            if (chartRef.current) {
//                chartRef.current.destroy();
//            }
//        };
//    }, [workouts]);  // Ensure the chart is updated each time workouts are updated

//    return (
//        <div className="p-4">
//            <h1 className="text-xl font-bold">Workout Logger</h1>
//            <input type="number" value={weight} onChange={(e) => setWeight(e.target.value)} placeholder="Weight (lbs)" className="border p-1" />
//            <input type="number" value={reps} onChange={(e) => setReps(e.target.value)} placeholder="Reps" className="border p-1" />
//            <input type="number" value={sets} onChange={(e) => setSets(e.target.value)} placeholder="Sets" className="border p-1" />
//            <button onClick={addWorkout} className="bg-blue-500 text-white p-2">Log Workout</button>

//            <h2 className="mt-4">Progress Metrics</h2>
//            <p>Total Weight Lifted: {totalWeightLifted} lbs</p>
//            <p>Average Reps per Set: {averageReps}</p>
//            <p>Total Workouts Completed: {totalWorkouts}</p>

//            {/* Render the Line chart with a ref */}
//            <Line
//                ref={chartRef}  // Use chartRef to track the chart instance
//                data={data}
//                options={{ maintainAspectRatio: false }}
//            />
//        </div>
//    );
// };

// export default Tracking;


import React from 'react';
import useWorkoutStore from '../../stores/UseWorkoutStore';

const ProgressTracker = () => {
  const totalWorkouts = useWorkoutStore((state) => state.getTotalWorkouts(state));
  const totalWeightLifted = useWorkoutStore((state) =>
    state.getTotalWeightLifted(state)
  );

  return (
    <div className="max-w-md mx-auto p-4 bg-white shadow-md rounded-md mt-6">
      <h2 className="text-xl font-semibold mb-4">Progress Tracker</h2>
      <div className="text-gray-700">
        <p>Total Workouts Completed: <strong>{totalWorkouts}</strong></p>
        <p>Total Weight Lifted: <strong>{totalWeightLifted} kg</strong></p>
      </div>
    </div>
  );
};

export default ProgressTracker;