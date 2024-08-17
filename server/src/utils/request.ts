import { Request, Response, NextFunction } from "express";

type ControllerFunction = (req: Request, res: Response) => Promise<void | Response> | void;

const request = (controller: ControllerFunction) => {
   return async (req: Request, res: Response, next: NextFunction) => {
      try {
         await controller(req, res);
      } catch (error) {
         next(error);
      }
   };
};

export default request;
