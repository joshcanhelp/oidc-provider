require("dotenv").config();
const { PORT = 3000, ISSUER_BASE_URL } = process.env;

const { Provider } = require("oidc-provider");

const configuration = {
  cookies: {
    keys: ["LONG_RANDOM_COOKIE_KEY"],
  },
  formats: {
    AccessToken: "jwt",
  },
  clients: [
    {
      client_id: "CLIENT_ID",
      client_secret: "CLIENT_SECRET",
      redirect_uris: ["https://joshc-test.auth0.com/login/callback"],
    },
  ],
};

const oidc = new Provider(ISSUER_BASE_URL, configuration);

oidc.listen(PORT, () => {
  console.log(`${ISSUER_BASE_URL}/.well-known/openid-configuration`);
});
