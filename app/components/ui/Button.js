import Link from 'next/link';

export default function Button({ className, btnStyle = 'fill', btnText = 'This Button', href = '#', target = false }) {
  // Fill Button
  if (btnStyle === 'fill') {
    return (
      <Link href={href} className={`btn btn-fill ${className}`} target={target ? '_blank' : ''}>
        <span className='btn-text'>{btnText}</span>
      </Link>
    );
  }

  // Outline Button
  if (btnStyle === 'outline') {
    return (
      <Link href={href} className='btn btn-outline' target={target ? '_blank' : ''}>
        <span className='btn-text gradient-text'>{btnText}</span>
      </Link>
    );
  }
}
