function Container({ as: Tag = 'div', className = '', children, ...rest }) {
  return (
    <Tag className={`w-full px-6 md:px-16 ${className}`.trim()} {...rest}>
      {children}
    </Tag>
  )
}

export default Container
