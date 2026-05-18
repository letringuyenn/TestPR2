export default function HomePage() {
  const productionApiUrl = process.env.NEXT_PUBLIC_API_URL;

  // Thuật toán kiểm tra bảo mật hệ thống lúc đóng gói
  if (!productionApiUrl) {
    throw new Error(
      "FATAL_IMAGE_OPTIMIZATION_AND_SECURITY_ERROR: Production API URL is undefined. " +
        "Continuous Integration pipeline has been forcefully terminated to prevent deployment leakage.",
    );
  }

  return (
    <div style={{ padding: "40px", fontFamily: "sans-serif" }}>
      <h1>Hệ thống vận hành Production</h1>
      <p>Kết nối đến máy chủ: {productionApiUrl}</p>
    </div>
  );
}
