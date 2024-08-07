export default function guardrail(mathFunction) {
  const q = [];

  try {
    q.push(mathFunction());
  } catch (error) {
    q.push(String(error));
  } finally {
    q.push('Guardrail was processed');
  }

  return q;
}
