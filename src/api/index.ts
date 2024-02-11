async function request<TResponse>(
  url: string,
  config?: RequestInit
): Promise<TResponse> {
  const response = await fetch(url, config);
  return await response.json();
}

export function get<TResponse>(url: string) {
  return request<TResponse>(url);
}

export function post<TBody extends BodyInit, TResponse>(
  url: string,
  body: TBody
) {
  request<TResponse>(url, { method: "POST", body });
}
