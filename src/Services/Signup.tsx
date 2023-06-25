import axios, { AxiosError, AxiosResponse } from "axios";

interface FormValues {
  name: string;
  email: string;
  password: string;
}

interface SignUpResponse {
  success: boolean;
  message: string;
}

export const signUp = async (formData: FormValues): Promise<SignUpResponse> => {
  try {
    const response: AxiosResponse<SignUpResponse> = await axios.post<SignUpResponse>(
      "/api/signup",
      formData,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    // Check if the response is successful
    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error(response.statusText);
    }
  } catch (error: unknown) {
    if (isAxiosError(error)) {
      // Handle Axios-specific errors
      const axiosError = error as AxiosError;
      console.log("Axios error:", axiosError.response?.data);
    } else {
      // Handle other types of errors
      const genericError = error as Error;
      console.log("Generic error:", genericError);
    }
    throw new Error("An error occurred during sign-up.");
  }
};

function isAxiosError(error: unknown): error is AxiosError {
  return (error as AxiosError).isAxiosError !== undefined;
}
