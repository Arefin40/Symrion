class ErrorResponse extends Error {
   public success: boolean;
   public status: number;

   constructor(statusCode: number, message: string, extra?: Record<string, any>) {
      super(message);

      this.success = false;
      this.status = statusCode;
      if (extra) Object.assign(this, extra);

      Error.captureStackTrace(this, this.constructor);
   }
}

export default ErrorResponse;
