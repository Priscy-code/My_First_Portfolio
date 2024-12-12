// import { create } from 'zustand';

// const useWorkoutStore = create((set) => ({
//   workoutEntries: [],

  
//   addWorkout: (workout) => set((state) => ({
//     workoutEntries: [...state.workoutEntries, workout]
//   }))
// }));

// export default useWorkoutStore;

// store.js
import { create } from 'zustand'; // Use named import

const useWorkoutStore = create((set) => ({
  exercises: [],
  fetchExercises: async () => {
    try {
      const response = await fetch(
        'https://wger.de/api/v2/exercise/?language=2&limit=100'
      );
      const data = await response.json();
      set({ exercises: data.results });
    } catch (error) {
      console.error('Error fetching exercises:', error);
    }
  },
  addWorkout: (newWorkout) =>
    set((state) => ({
      workouts: [...state.workouts, newWorkout],
    })),
  workouts: [],
}));

export default useWorkoutStore;
