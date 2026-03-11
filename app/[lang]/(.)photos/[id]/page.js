import Modal from "@/app/components/Modal";
import PageDetails from '@/app/components/PageDetails';

const PhotoModal = async({params}) => {
const {id, lang} =  await params

    return(
        <Modal>
            <PageDetails id={id} lang={lang} />
        </Modal>
    )
}

export default PhotoModal;