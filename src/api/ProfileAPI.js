export async function getUserProfile() {
  return {
    id: 1,
    username: "443361234567",
    full_name: "John Doe",
    address:
      "Robert Robertson, 1234 NW Bobcat Lane, St. Robert, MO 65584-5678.",
    image: "https://loremflickr.com/640/360",
  };
}

export async function getBusinessProfile() {
  return {
    id: 1,
    user_id: 1,
    name: "My Business Inc.",
    phone: "443215564789",
    images: ["https://loremflickr.com/640/360"],
    category: "real estate",
  };
}
