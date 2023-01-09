
//this should be called UserInputs
export interface Inputs {
    email: string;
    password: string;
    confirmPassword: string;
  }

  export interface User {
    email: string;
    password: string;
  }

//THIS SHOULD BE _ID, fix FILE TO BE A STRING
  export interface ReviewInputs {
    id?: string;
    title: string;
    review: string;
    artist: string;
    author: string;
    authorBand: string;
    banner: string;
    reviewImage: string;
  }

  export interface ReviewImage {
    filename: string,
    contentType: string,
    imageBase64: string
  }
  export interface ReviewI {
    title: string;
    review: string;
    artist: string;
    author: string;
    authorBand: string;
    banner: string;
    reviewImage: ReviewImage;
    userID?: string;
    _id: string;
    children?: React.ReactNode;
    key: string;
  }

  export interface ReviewsI {
    reviews: ReviewI[];
  }
  export interface ReviewsContextDispatch {
    reviews: ReviewI[];
    dispatch: React.Dispatch<any>;
  }

  export interface ReviewsContextProviderProps {
    children: React.ReactNode
}

  export interface DeleteReviewModalI {
    id: string;
    children?: React.ReactNode;
  }