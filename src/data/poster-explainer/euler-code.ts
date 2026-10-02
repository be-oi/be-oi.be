/** Python sample shown on every locale (code and identifiers stay in English). */
export const eulerCode = `from collections import Counter

def euler_kind(edges):
    """Classify a connected multigraph given as a list of edges (u, v)."""
    degree = Counter()
    for u, v in edges:
        degree[u] += 1
        degree[v] += 1
    odd = sum(1 for d in degree.values() if d % 2 == 1)
    if odd == 0:
        return "Eulerian circuit"
    if odd == 2:
        return "Eulerian path"
    return "neither"

koenigsberg = [("A", "B"), ("A", "B"), ("B", "D"), ("B", "D"),
               ("A", "C"), ("B", "C"), ("C", "D")]
print(euler_kind(koenigsberg))  # neither: four odd vertices`;
