import { FastifyInstance } from 'fastify';
// import  uploadFileMiddleware  from '../../util';
import upload from "../../upload"
// const upload = multer({ dest: 'uploads/' })

import {
  getCustmoer,
  deleteCustmoer,
  postCustmoer,
  updateCustmoer,
  getOneCustmoer,
  // uploadfileCustmoer,
  uploadfileAndBody,
  uploadfileAndBase64,
  uploadfileEncode,
} from './controller';

async function customerRoutes(server: FastifyInstance) {

  server.post('/encode',{preHandler:upload,handler:uploadfileEncode});

  server.post('/base64',{preHandler:upload,handler:uploadfileAndBase64});

  server.get('/', getCustmoer);
  server.get('/:id', getOneCustmoer);
  server.post('/create', postCustmoer);
  server.delete('/delete/:id', deleteCustmoer);
  server.put('/update/:id', updateCustmoer);
  // server.post('/upload',{preHandler:upload,handler:uploadfileCustmoer})
  server.post('/upload',{preHandler:upload,handler:uploadfileAndBody})
  // server.post('/upload',{ preHandler: upload.single('file') },uploadfileCustmoer)
  
}

export default customerRoutes;
