import './App.css'
import { NotesContextProvider } from './contexts/NotesContext'
import { ModalContextProvider } from './contexts/ModalContext'
import { HorizontalSplit } from './layouts/HorizontalSplit'
import { Modal } from './layouts/Modal'
import { LeftSidebar } from './components/LeftSidebar'
import { Main } from './components/Main'

function App() {
  return (
    <div className="App">
      <NotesContextProvider>
        <HorizontalSplit leftPercentageWidth={30} rightPercentageWidth={70}>
          <ModalContextProvider>
            <LeftSidebar />
            <Modal />
          </ModalContextProvider>

          <Main />
        </HorizontalSplit>
      </NotesContextProvider>
    </div>
  )
}

export default App
