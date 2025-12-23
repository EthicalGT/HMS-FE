const BASE_URL = "http://127.0.0.1:8000/api";

export async function getHawkerDetails() {
  try {
    const res = await fetch(`${BASE_URL}/hawker/getdetails`, {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    });

    const data = await res.json();

    if (!res.ok) {
      return {
        status: "failed",
        message: data?.message || "Server error. Please try again later.",
      };
    }

    return {
      status: "success",
      data: data.data,
    };
  } catch (error) {
    return {
      status: "failed",
      message: "Network issue. Please check your internet connection.",
    };
  }
}
