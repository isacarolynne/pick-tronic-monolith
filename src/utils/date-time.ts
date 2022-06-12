import * as dayjs from 'dayjs';

/**
 * Returns a `Date` object, from current date plus seven days.
 */
export const getDeliveryDate = () => {
  return dayjs().add(7, 'day').toDate();
}

/**
 * Returns the current date like a `Date` object.
 */
export const getCurrentDate = () => dayjs().toDate();
