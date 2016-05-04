export default function bootstrapLink(history, state, path, query = null) {
  // console.log(history);
  return {
    onClick: (event) => {
      event.preventDefault();
      history.push({'state': state, 'pathname': path, 'query': query});
    },
    href: history.createPath(path, query),
    active: history.isActive(path, query)
  };
}

export function bootstrapSelectLink(history, state, path, query = null) {
  return {
    onSelect: (event) => {
      event.preventDefault();
      history.push({'state': state, 'pathname': path, 'query': query});
    },
    href: history.createPath(path, query),
    active: history.isActive(path, query)
  };
}
