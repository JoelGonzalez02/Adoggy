// import { petFinderKey, petFinderSecret } from "../../api-keys";

const key = p7rNFI2gUIoYHCWJMUUA5BAOoirnSfP30Dpny8c4ajQDtHPkyV
const secret = qAj2b76OKxznkKYP8RNfgpjJZxu3Kts8irMRf3qy
export default async (req, res) => {
  const params = new URLSearchParams();
  params.append("grant_type", "client_credentials");
  params.append("client_id", key);
  params.append("client_secret", secret);
  const petfinderRes = await fetch(
    "https://api.petfinder.com/v2/oauth2/token",
    {
      method: "POST",
      body: params,
    }
  );
  const data = await petfinderRes.json();
  res.send(data);
};

