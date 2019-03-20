function dfs(root, target) {
  if (root.value === null) return null;
  if (root.value === target) return root;
  root.children.forEach(child => {
    let search_result = dfs(child, target);
    if (search_result !== null) return search_result;
  });
  return null;
}
