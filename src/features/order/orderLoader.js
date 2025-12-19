import { getOrder } from '../../services/apiRestaurant';

export async function loader({ params }) {
  // Replace with real API call in production
  const order = await getOrder(params.orderId);
  return order;
}
