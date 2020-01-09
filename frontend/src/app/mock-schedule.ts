import { Schedule } from './schedule';

export const SCHEDULE: Schedule[] = [
  {
    journeyId: 1,
    flightNumber: 'EY323',
    destinationCode: 'DUB',
    originCode: 'DXB',
    arrivalTime: '17:00 26/09/20',
    departureTime: '13:00 27/09/20',
    remainingSeats: 10,
  },
  {
    journeyId: 2,
    flightNumber: 'CY131',
    destinationCode: 'ISB',
    originCode: 'JFK',
    arrivalTime: '03:00 25/10/20',
    departureTime: '17:00 25/10/20',
    remainingSeats: 0,
  },
]
