const propTypes = {
  commits: PropTypes.arrayOf(
    PropTypes.shape({
      author: PropTypes.object,
      comments_url: PropTypes.string,
      commit: PropTypes.shape({
        author: PropTypes.object,
        message: PropTypes.string
      }),
      committer: PropTypes.shape({
        avatar_url: PropTypes.string,
        login: PropTypes.string,
        repos_url: PropTypes.string
      }),
      html_url: PropTypes.string,
      node_id: PropTypes.string,
      parents: PropTypes.arrayOf(PropTypes.object),
      sha: PropTypes.string,
      url: PropTypes.string
    })
  )
};
