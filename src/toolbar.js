import React from 'react'
import { UtopiaTheme } from 'uuiui'
import {
  colorTheme,
  FlexColumn,
  FlexRow,
  Icn,
  LargerIcons,
  SquareButton,
  Tooltip as TooltipWithoutSpanFixme,
  useColorTheme,
  UtopiaStyles,
} from 'uuiui'
import { Utils } from 'uuiui-deps'
export const useCheckInsertModeForElementType = (
  elementType,
  options,
) => {
  return true
}

export const useEnterDrawToInsertForButton = () => {
  return () => {
    // Dummy implementation
  }
}

export const useEnterDrawToInsertForConditional = () => {
  return () => {
    // Dummy implementation
  }
}

export const useEnterDrawToInsertForDiv = () => {
  return () => {
    // Dummy implementation
  }
}

export const useEnterDrawToInsertForImage = () => {
  return () => {
    // Dummy implementation
  }
}

export const useEnterTextEditMode = () => {
  return () => {
    // Dummy implementation
  }
}

const useDispatch = () => {
  return (actions) => {
    // Dummy implementation
  }
}

const RightMenuTab = {
  Insert: 'insert',
  Inspector: 'inspector',
}

const togglePanel = () => {
  // Dummy implementation
}

const stopPropagation = (e) => {
  e.stopPropagation()
}

export const InsertConditionalButtonTestId =
  'insert-mode-conditional'

export const CanvasToolbarId = 'canvas-toolbar'

export const CanvasToolbar = React.memo(() => {
  const dispatch = useDispatch()
  const theme = useColorTheme()

  const selectedViewsRef = { current: [] }
  const projectContentsRef = { current: {} }

  const divInsertion = useCheckInsertModeForElementType(
    'div',
  )
  const insertDivCallback = useEnterDrawToInsertForDiv()
  const imgInsertion = useCheckInsertModeForElementType(
    'img',
  )
  const insertImgCallback = useEnterDrawToInsertForImage()
  const textInsertion = useCheckInsertModeForElementType(
    'span',
    {
      textEdit: true,
    },
  )
  const insertTextCallback = useEnterTextEditMode()
  const buttonInsertion = useCheckInsertModeForElementType(
    'button',
  )
  const insertButtonCallback = useEnterDrawToInsertForButton()
  const conditionalInsertion = useCheckInsertModeForElementType(
    'div',
    {
      wrapInConditional: true,
    },
  )
  const insertConditionalCallback = useEnterDrawToInsertForConditional()

  /**
   * @type {"closed" | "insert" | "convert"}
   */
  const insertMenuMode = 'closed'

  const openFloatingInsertMenuCallback = React.useCallback(() => {
    dispatch([
      // openFloatingInsertMenu({
      //   insertMenuMode: "insert",
      //   parentPath: null,
      //   indexPosition: null,
      // }),
    ])
  }, [dispatch])
  const openFloatingConvertMenuCallback = React.useCallback(() => {
    dispatch([
      // openFloatingInsertMenu({
      //   insertMenuMode: "convert",
      // }),
    ])
  }, [dispatch])
  const openFloatingWrapInMenuCallback = React.useCallback(() => {
    dispatch([
      // openFloatingInsertMenu({
      //   insertMenuMode: "wrap",
      // }),
    ])
  }, [dispatch])

  const wrapInDivCallback = React.useCallback(() => {
    dispatch([
      // wrapInElement(selectedViewsRef.current, {
      //   element: defaultTransparentViewElement(
      //     generateUidWithExistingComponents(projectContentsRef.current)
      //   ),
      //   importsToAdd: {},
      // }),
    ])
  }, [dispatch, selectedViewsRef, projectContentsRef])

  const clickSelectModeButton = React.useCallback(() => {
    dispatch([
      // switchEditorMode(EditorModes.selectMode())
    ])
  }, [dispatch])

  const insertMenuSelected = false

  const selectInsertMenuPane = React.useCallback(() => {
    let actions = []
    if (!insertMenuSelected) {
      // actions.push(setPanelVisibility("rightmenu", true));
    }
    // actions.push(setRightMenuTab(RightMenuTab.Insert));
    dispatch(actions)
  }, [dispatch, insertMenuSelected])

  const zoomLevel = 1

  const zoomIn = React.useCallback(
    () =>
      dispatch([
        // CanvasActions.zoom(Utils.increaseScale(zoomLevel))
      ]),
    [dispatch, zoomLevel],
  )
  const zoomOut = React.useCallback(
    () =>
      dispatch([
        // CanvasActions.zoom(Utils.decreaseScale(zoomLevel))
      ]),
    [dispatch, zoomLevel],
  )

  const zoom100pct = React.useCallback(
    () =>
      dispatch([
        // CanvasActions.zoom(1)
      ]),
    [dispatch],
  )

  const isLiveMode = false

  const toggleLiveMode = React.useCallback(() => {
    if (isLiveMode) {
      // dispatch([switchEditorMode(EditorModes.selectMode())]);
    } else {
      // dispatch([switchEditorMode(EditorModes.liveMode())]);
    }
  }, [dispatch, isLiveMode])

  const resetCanvasCallback = React.useCallback(() => {
    // dispatch([resetCanvas()]);
  }, [dispatch])

  const toggleCodeEditorVisible = React.useCallback(() => {
    // dispatch([togglePanel("codeEditor")]);
  }, [dispatch])

  const toggleInspectorVisible = React.useCallback(() => {
    // dispatch([togglePanel("rightmenu")]);
  }, [dispatch])

  const toggleNavigatorVisible = React.useCallback(() => {
    // dispatch([togglePanel("leftmenu")]);
  }, [dispatch])

  return (
    <FlexColumn
      id={CanvasToolbarId}
      style={{
        gap: 6,
        alignItems: 'stretch',
        width: 64,
        backgroundColor: theme.inspectorBackground.value,
        borderRadius:
          UtopiaTheme.panelStyles.panelBorderRadius,
        boxShadow: `3px 4px 10px 0px ${UtopiaTheme.panelStyles.panelShadowColor}`,
        pointerEvents: 'initial',
      }}
      onMouseDown={stopPropagation}
      onClick={stopPropagation}
    >
      <FlexColumn style={{ padding: 4 }}>
        {/* ------------------------------------ */}
        <header
          style={{
            paddingLeft: 4,
            fontSize: 10,
            fontWeight: 500,
          }}
        >
          Tools
        </header>
        <FlexRow
          style={{ flexWrap: 'wrap', gap: 4, padding: 4 }}
        >
          <Tooltip title='Select' placement='bottom'>
            <InsertModeButton
              iconType='pointer'
              iconCategory='tools'
              onClick={clickSelectModeButton}
            />
          </Tooltip>
          <Tooltip title='Insert text' placement='bottom'>
            <InsertModeButton
              iconType='pure-text'
              primary={textInsertion}
              onClick={insertTextCallback}
            />
          </Tooltip>
          <Tooltip title='Zoom in' placement='bottom'>
            <InsertModeButton
              iconType='magnifyingglass-plus'
              iconCategory='semantic'
              onClick={zoomIn}
            />
          </Tooltip>
          <Tooltip title='Zoom out' placement='bottom'>
            <InsertModeButton
              iconType='magnifyingglass-minus'
              iconCategory='semantic'
              onClick={zoomOut}
            />
          </Tooltip>
          <Tooltip title='Zoom to 100%' placement='bottom'>
            <SquareButton
              highlight
              style={{ textAlign: 'center', width: '100%' }}
              onClick={zoom100pct}
            >
              {zoomLevel * 100}%
            </SquareButton>
          </Tooltip>
        </FlexRow>
      </FlexColumn>

      {/* ------------------------------------ */}
      <FlexColumn style={{ padding: 4 }}>
        <header
          style={{
            paddingLeft: 4,
            fontSize: 10,
            fontWeight: 500,
          }}
        >
          Insert
        </header>
        <FlexRow
          style={{ flexWrap: 'wrap', gap: 4, padding: 4 }}
        >
          <Tooltip title='Insert div' placement='bottom'>
            <InsertModeButton
              iconType='view'
              primary={divInsertion}
              onClick={insertDivCallback}
            />
          </Tooltip>
          <Tooltip title='Insert image' placement='bottom'>
            <InsertModeButton
              iconType='image'
              primary={imgInsertion}
              onClick={insertImgCallback}
            />
          </Tooltip>
          <Tooltip title='Insert button' placement='bottom'>
            <InsertModeButton
              iconType='clickable'
              primary={buttonInsertion}
              onClick={insertButtonCallback}
            />
          </Tooltip>
          <Tooltip
            title='Choose and insert a component'
            placement='bottom'
          >
            <InsertModeButton
              iconType='componentinstance'
              primary={insertMenuMode === 'insert'}
              onClick={openFloatingInsertMenuCallback}
            />
          </Tooltip>
          <Tooltip
            title='Insert conditional'
            placement='bottom'
          >
            <InsertModeButton
              testid={InsertConditionalButtonTestId}
              iconType='conditional'
              primary={conditionalInsertion}
              onClick={insertConditionalCallback}
            />
          </Tooltip>
          <Tooltip
            title='Open insert menu'
            placement='bottom'
          >
            <InsertModeButton
              iconType='dotdotdot'
              iconCategory='semantic'
              primary={insertMenuSelected}
              onClick={selectInsertMenuPane}
            />
          </Tooltip>
        </FlexRow>
      </FlexColumn>
      {/* ------------------------------------ */}
      <FlexColumn style={{ padding: 4 }}>
        <header
          style={{
            paddingLeft: 4,
            fontSize: 10,
            fontWeight: 500,
          }}
        >
          Convert
        </header>
        <FlexRow
          style={{ flexWrap: 'wrap', gap: 4, padding: 4 }}
        >
          <Tooltip
            title='Converts an element or component into another'
            placement='bottom'
          >
            <InsertModeButton
              iconType='convertobject'
              iconCategory='semantic'
              primary={insertMenuMode === 'convert'}
              onClick={openFloatingConvertMenuCallback}
            />
          </Tooltip>
        </FlexRow>
      </FlexColumn>

      {/* ------------------------------------ */}
      <FlexColumn style={{ padding: 4 }}>
        <header
          style={{
            paddingLeft: 4,
            fontSize: 10,
            fontWeight: 500,
          }}
        >
          Organise
        </header>
        <FlexRow
          style={{ flexWrap: 'wrap', gap: 4, padding: 4 }}
        >
          <Tooltip
            title='Wrap selection in div'
            placement='bottom'
          >
            <InsertModeButton
              iconType='group-open'
              onClick={wrapInDivCallback}
            />
          </Tooltip>
          <Tooltip
            title='Wrap selection in an element'
            placement='bottom'
          >
            <InsertModeButton
              iconType='designtool-larger'
              iconCategory='semantic'
              primary={insertMenuMode === 'wrap'}
              onClick={openFloatingWrapInMenuCallback}
            />
          </Tooltip>
        </FlexRow>
      </FlexColumn>
      {/* ------------------------------------ */}
      <FlexColumn style={{ padding: 4 }}>
        <header
          style={{
            paddingLeft: 4,
            fontSize: 10,
            fontWeight: 500,
          }}
        >
          Editor
        </header>
        <FlexRow
          style={{ flexWrap: 'wrap', gap: 4, padding: 4 }}
        >
          <Tooltip
            title='Toggle Live Mode'
            placement='bottom'
          >
            <InsertModeButton
              iconType='playbutton'
              iconCategory='semantic'
              primary={isLiveMode}
              onClick={toggleLiveMode}
              keepActiveInLiveMode
            />
          </Tooltip>
          <Tooltip title='Reset Canvas' placement='bottom'>
            <InsertModeButton
              iconType='refresh'
              iconCategory='semantic'
              onClick={resetCanvasCallback}
              keepActiveInLiveMode
            />
          </Tooltip>

          <Tooltip
            title='Toggle Navigator (⌘⌥1)'
            placement='bottom'
          >
            <InsertModeButton
              iconType='navigator-larger'
              iconCategory='semantic'
              onClick={toggleNavigatorVisible}
              keepActiveInLiveMode
            />
          </Tooltip>
          <Tooltip
            title='Toggle Inspector (⌘⌥2)'
            placement='bottom'
          >
            <InsertModeButton
              iconType='inspector-larger'
              iconCategory='semantic'
              onClick={toggleInspectorVisible}
              keepActiveInLiveMode
            />
          </Tooltip>
          <Tooltip
            title='Toggle Code Editor (⌘.)'
            placement='bottom'
          >
            <InsertModeButton
              iconType='codymccodeface-larger'
              iconCategory='semantic'
              onClick={toggleCodeEditorVisible}
              keepActiveInLiveMode
            />
          </Tooltip>
        </FlexRow>
      </FlexColumn>
    </FlexColumn>
  )
})

const InsertModeButton = React.memo(
  /**
   * @param {Object} props - The props object for the component.
   * @param {boolean} [props.keepActiveInLiveMode=false] - Whether the button should remain active in live mode.
   * @param {boolean} [props.primary=false] - Whether the button should be styled as a primary button.
   * @param {string} [props.iconCategory="element"] - The category of the icon to be displayed in the button.
   * @param {string} props.iconType - The type of the icon to be displayed in the button.
   * @param {string} [props.testid=""] - The test ID for the button.
   * @param {Object} [props.style] - The style object for the button.
   * @param {Function} props.onClick - The click handler for the button.
   */
  (props) => {
    const keepActiveInLiveMode =
      props.keepActiveInLiveMode ?? false
    const primary = props.primary ?? false
    const canvasInLiveMode = false
    const iconCategory = props.iconCategory ?? 'element'

    return (
      <SquareButton
        data-testid={props.testid}
        style={{ ...props.style, borderRadius: 4 }}
        primary={primary}
        highlight
        onClick={props.onClick}
        disabled={canvasInLiveMode && !keepActiveInLiveMode}
      >
        <Icn
          category={iconCategory}
          type={props.iconType}
          color={'main'}
          width={18}
          height={18}
        />
      </SquareButton>
    )
  },
)

const Tooltip = (props) => {
  return (
    <TooltipWithoutSpanFixme {...props}>
      {/* TODO why do we need to wrap the children in a span? */}
      <span>{props.children}</span>
    </TooltipWithoutSpanFixme>
  )
}
