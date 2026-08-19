function Container({ as: Tag = 'div', className = '', children, ...rest }) {
  return (
    <Tag className={`mx-auto w-full max-w-[1280px] px-6 md:px-16 ${className}`.trim()} {...rest}>
      {children}
    </Tag>
  )
}

export default Container
