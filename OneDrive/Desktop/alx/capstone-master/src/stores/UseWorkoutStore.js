// import { create } from 'zustand';

// const useWorkoutStore = create((set) => ({
//   workoutEntries: [],

  
//   addWorkout: (workout) => set((state) => ({
//     workoutEntries: [...state.workoutEntries, workout]
//   }))
// }));

// export default useWorkoutStore;

// store.js
import {create} from 'zustand';

const useWorkoutStore = create((set) => ({
  workouts: [],

  // Add a workout
  addWorkout: (newWorkout) =>
    set((state) => ({
      workouts: [...state.workouts, newWorkout],
    })),

  // Fetching exercise data (WGER API)
  exercises: [],
  fetchExercises: async () => {
    const response = await fetch('https://wger.de/api/v2/exercise/');
    const data = await response.json();
    set({ exercises: data.results });
  },

  // Track progress
  getTotalWorkouts: (state) => state.workouts.length,
  getTotalWeightLifted: (state) =>
    state.workouts.reduce(
      (total, workout) =>
        total + workout.exercises.reduce((sum, ex) => sum + ex.weight, 0),
      0
    ),
}));

export default useWorkoutStore;
