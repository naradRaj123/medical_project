import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_TOKEN, BASE_API_URL } from "@/general";
import { selectBearerToken, selectUserId } from "./slices/auth-slice";

const baseQuery = fetchBaseQuery({
  baseUrl: 'http://localhost:3030',
  prepareHeaders: async (headers, { getState }) => {
    const state = getState();
    const bearertoken = selectBearerToken(state);
    const userid = selectUserId(state);
    const token = API_TOKEN;
    if (token) {
      headers.set("authtoken", token);
    };
    if (bearertoken) {
      headers.set("authorization", `Bearer ${bearertoken}`);
    };
    if (userid) {
      headers.set("userid", userid);
    }
    return headers;
  },
});

export const myApi = createApi({
  reducerPath: "myApi",
  baseQuery: baseQuery,
  tagTypes: [
    "courses",
    "coCreators",
    "livePrograms",
    "recordedPrograms",
    "statusCourses",
    "statusLivePrograms",
    "statusRecordedPrograms",
    "statusBlogs",
  ],
  endpoints: (builder) => ({
    getUserClinic: builder.query <any , void>({
      query: () => {
        return {
          url: "/get/userclinic",
          method: "GET"
        };
      },
    }),

    getAppointments: builder.query <any , void>({
      query: () => {
        return {
          url: "/appointment/getall?allRecords=false&page=1",
          method: "GET"
        };
      },
    }),

    // getAppointments: builder.query <any , void>({
    //   query: () => {
    //     return {
    //       url: "/appointment/getall?allRecords=false&page=1",
    //       method: "GET"
    //     };
    //   },
    // }),
    
    // get user
    getuser: builder.query <any , void>({
      query: () => {
        return {
          url: "/newuser",
          method: "GET"
        };
      },
    }),

    getConsortium: builder.mutation({
      query: (bodyData) => {
        return {
          url: "/get/consortium",
          method: "POST",
          body: bodyData
        };
      },
    }),

    signIn: builder.mutation({
      query: (bodyData) => {
        return {
          url: "/login-user",
          method: "POST",
          body: bodyData
        };
      },
    }),


    addClinic: builder.mutation({
      query: (bodyData) => {
        return {
          url: "/create/clinic",
          method: "POST",
          body: bodyData
        };
      },
    }),

    addPatient: builder.mutation({
      query: (bodyData) => {
        return {
          url: "/patient/create/patient",
          method: "POST",
          body: bodyData
        };
      },
    }),

    createAppoinment: builder.mutation({
      query: (bodyData) => {
        return {
          url: "/appointment/create",
          method: "POST",
          body: bodyData
        };
      },
    }),

    addPartners: builder.mutation({
      query: (bodyData) => {
        return {
          url: "/create/consortium",
          method: "POST",
          body: bodyData
        };
      },
    }),

    createPrescription: builder.mutation({
      query: (bodyData) => {
        return {
          url: "/create/prescription",
          method: "POST",
          body: bodyData
        };
      },
    }),

    addMedicine:builder.mutation({
      query:(bodyData)=>{
        return{
          url:'/create/medicine',
          method:"POST",
          body:bodyData
        };
      },
    }),

  }),
});


//post - mutation

export const {
  useSignInMutation,
  useGetUserClinicQuery,
  useGetAppointmentsQuery,
  useCreateAppoinmentMutation,
  useGetConsortiumMutation,
  useAddClinicMutation,
  useAddPatientMutation,
  useAddPartnersMutation,
  useCreatePrescriptionMutation,
  useAddMedicineMutation,
  useGetuserQuery
} = myApi;
