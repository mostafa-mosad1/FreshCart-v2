import { baseUrl } from "@/AxiosInstance/AxiosInstance";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
const initialState = {
  isLoading: false,
  res: {},
};

export let SigninFun = createAsyncThunk(
  "SigninSlice/SigninFun",
  async (data, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      return await baseUrl.post("auth/signin", data);
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const SigninSlice = createSlice({
  name: "signinSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(SigninFun.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(SigninFun.fulfilled, (state, action) => {
      state.isLoading = false;
      state.res = action.payload;
    });
    builder.addCase(SigninFun.rejected, (state, action) => {
      state.isLoading = false;
    });
  },
});

export const {} = SigninSlice.actions;

export const SigninSliceReducer = SigninSlice.reducer;
