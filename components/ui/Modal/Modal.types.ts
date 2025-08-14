export interface ModalProps {
  /**
   * Whether the modal is open/visible
   */
  isOpen: boolean;
  
  /**
   * Function to call when the modal should be closed
   */
  onClose: () => void;
  
  /**
   * Modal title (optional)
   */
  title?: string;
  
  /**
   * Modal content
   */
  children: React.ReactNode;
  
  /**
   * Size of the modal
   */
  size?: 'sm' | 'md' | 'lg' | 'xl';
  
  /**
   * Whether clicking the backdrop should close the modal
   * @default true
   */
  closeOnBackdropClick?: boolean;
  
  /**
   * Whether pressing ESC should close the modal
   * @default true
   */
  closeOnEsc?: boolean;
  
  /**
   * Additional CSS classes for the modal container
   */
  className?: string;
  
  /**
   * Additional CSS classes for the modal overlay
   */
  overlayClassName?: string;
}
