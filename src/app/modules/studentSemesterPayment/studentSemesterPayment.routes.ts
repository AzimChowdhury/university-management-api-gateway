import express from 'express';
import { StudentSemesterPaymentController } from './studentSemesterPayment.controller';
import auth from '../../middlewares/auth';
import { ENUM_USER_ROLE } from '../../../enums/user';

const router = express.Router();

router.get('/my-semester-payments', StudentSemesterPaymentController.getMyPayment);

router.post(
<<<<<<< HEAD
  '/initiate-payment',
  auth(ENUM_USER_ROLE.STUDENT),
  StudentSemesterPaymentController.initiatePayment
);

router.post(
  '/complete-payment',
  auth(ENUM_USER_ROLE.STUDENT),
  StudentSemesterPaymentController.completePayment
=======
    '/initiate-payment',
    auth(ENUM_USER_ROLE.STUDENT),
    StudentSemesterPaymentController.initiatePayment
);

router.post(
    '/complete-payment',
    auth(ENUM_USER_ROLE.STUDENT),
    StudentSemesterPaymentController.completePayment
>>>>>>> 94663038dca19e4951bdd411f20863b527d26174
);

export const studentSemesterPaymentRoutes = router;
