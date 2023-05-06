class HttpService {
  // Read this: https://platform.openai.com/docs/guides/chat/introduction
  // messages: [{ role: 'user', content: prompt }] gpt-3.5-turbo
  async post(prompt: string) {
    return fetch(`${process.env.OPENAI_API_URL}/completions`, {
      method: 'POST',
      body: JSON.stringify({
        prompt,
        model: 'text-davinci-003',
        temperature: 0.7,
        max_tokens: 500,
        top_p: 1,
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
