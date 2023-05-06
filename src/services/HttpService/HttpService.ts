class HttpService {
  // Read this: https://platform.openai.com/docs/guides/chat/introduction
  async post(prompt: string) {
    console.log(prompt);
    return fetch(`${process.env.OPENAI_API_URL}/completions`, {
      method: 'POST',
      body: JSON.stringify({
        prompt,
        model: 'gpt-3.5-turbo',
        temperature: 0,
        max_tokens: 100,
      }),
      headers: {
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
        'Content-Type': 'application/json',
      },
    }).then((res) => res.json());
  }
}

const httpService = new HttpService();
export { httpService };
