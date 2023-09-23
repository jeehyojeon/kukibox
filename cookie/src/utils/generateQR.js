import QRCode from "qrcode";

export async function generateQR(url) {
  try {
    const qrDataURL = await QRCode.toDataURL(url);
    return qrDataURL;
  } catch (err) {
    console.error(err);
    return null;
  }
}
