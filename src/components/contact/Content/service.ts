
export const sendMail = async (value: any) => {
  try {
    const response = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        "api-key": process.env.NEXT_PUBLIC_API_KEY_EMAIL || ''
        // Other headers if needed
      },
      body: JSON.stringify(value),
    });

    return response

  } catch (error) {
    // Xử lý khi có lỗi trong quá trình gọi API
    throw error
  }
}