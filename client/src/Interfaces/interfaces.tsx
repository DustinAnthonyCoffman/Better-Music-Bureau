export interface Inputs {
    email: string;
    password: string;
    confirmPassword: string;
  }

  export interface User {
    email: string;
    password: string;
  }


  export interface CreateReviewInputs {
    title: string;
    review: string;
    artist: string;
  }

  export interface ReviewI {
    title: string;
    review: string;
    artist: string;
    userID: string;
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