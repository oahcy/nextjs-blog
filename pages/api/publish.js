
export default function handler(req, res) {
  console.log(req.headers.referer);
  if (req.method === 'POST') {
    console.log(req.body);
  } else {
    console.log(req.query);
  }
  res.status(200).send({ message: 'ok' });
}