import { useState, useEffect } from 'react';
import { Event } from '../interfaces/EventsInterfaces';
import { mockEvents } from '../../../data/mockEvents';

export const useEvents = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEvents = async () => {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setEvents(mockEvents);
      setLoading(false);
    };

    fetchEvents();
  }, []);

  return { events, loading };
};