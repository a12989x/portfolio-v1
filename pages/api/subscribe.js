const { BUTTONDOWN_API_KEY } = process.env;

const subscribe = async (req, res) => {
  const { email } = JSON.parse(req.body);

  if (!email) {
    return res
      .status(400)
      .json({ success: false, message: 'Email is required' });
  }

  try {
    const body = JSON.stringify({
      email,
      tags: ['codaxx.ml'],
      referrer_url: 'codaxx.ml',
    });

    const options = {
      body,
      headers: {
        Authorization: `Token ${BUTTONDOWN_API_KEY}`,
        'Content-Type': 'application/json',
      },
      method: 'POST',
    };

    const data = await fetch(
      `https://api.buttondown.email/v1/subscribers`,
      options
    );

    if (data.status >= 400) {
      const text = await data.text();

      if (text.includes('already subscribed')) {
        return res.status(400).json({
          success: true,
          message: `You've already subscribed!`,
        });
      }

      return res.status(400).json({
        success: false,
        message: 'Your email is invalid.',
      });
    }

    return res.status(201).json({
      success: true,
      message: "Congrats! You're on the mailing list.",
    });
  } catch (err) {
    return res
      .status(500)
      .json({ success: false, message: 'Unable to subscribe. Sorry.' });
  }
};

export default subscribe;
