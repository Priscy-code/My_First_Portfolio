export interface ShareMenuProps {
    onClose: () => void;
    onShareOptionClick: (option: string) => void;
    showSendToFriend?: boolean;
}