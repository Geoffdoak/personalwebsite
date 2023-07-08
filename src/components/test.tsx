type TestProps = {
    content: string;
    subContent: string;
}

export default function Test(props: TestProps) {
    return (
     <div className='test component'>
        <div>{props.content}</div>
        <div>{props.subContent ? props.subContent : 'test missing'}</div>
      </div>
    )
  }
