import { createMuiTheme } from "@material-ui/core";

// Default theme
const theme = createMuiTheme({
  typography: {
    useNextVariants: true
  }
});

const colors = {
  rangeSliderColor: "#005277",
  tableHeader: "#F8F5F0",
  logo: "#085375",
  searchInput: {
    backgroundColor: "#F8F5F0"
  },
  searchInputWithSelect: {
    select: {
      backgroundColor: "#FAF9F5"
    }
  },
  searchPage: {
    tabSelectedBackground: "#C4C6C8",
    tabBackground: "#fff",
    filterBackground: "#F8F5F0",
    weightValueBorder: "#C4C6C8",
    ratingIconColor: "#C4C6C8",
    deliveryTermLabel: "#fff",
    uploadFileButton: {
      fontColor: "#fff",
      default: ["#6EE0DD", "#96E5A5"],
      hovered: "#8DCADC",
      focused: "#77A1B3",
      disabled: "#C4C6C8"
    },
    downloadTemplateButton: {
      fontColor: "#fff",
      default: "#8090AA",
      hovered: "#436789",
      focused: "#ABB4C5"
    },
    basketButton: {
      fontColor: "#fff",
      default: "#085375",
      hovered: "#032D44",
      focused: "#77A1B3"
    },
    table: {
      unfoldedRow: "#FFD799",
      selectedRow: "#FFD799"
    }
  },
  basketPage: {
    orderButton: {
      fontColor: "#fff",
      default: "#085375",
      hovered: "#032D44",
      focused: "#77A1B3"
    },
    deleteButton: {
      fontColor: theme.palette.text.primary,
      default: "#D6E8E8",
      hovered: "#A1C6D2",
      focused: "#A1C6D2"
    }
  },
  ordersPage: {
    button: {
      fontColor: theme.palette.text.primary,
      borderColor: "#085375",
      default: "#D6E8E8",
      hovered: "#add1d2",
      focused: "#add1d2"
    }
  },
  shipmentsPage: {
    table: {
      unfoldedRow: "#FFD799",
      selectedRow: "#FFD799"
    },
    shipmentDateDialog: {
      dialog: "#add1d2",
      textField: {
        background: "#FBF9F6"
      },
      text: {
        color: "#FBF9F6"
      },
      button: {
        fontColor: "#fff",
        default: "#ff2d37",
        hovered: "#EF6A3D",
        disabled: "#ff2d37"
      }
    },
    totalTable: {
      button: {
        fontColor: "#fff",
        default: "#085375",
        hovered: "#032D44",
        focused: "#77A1B3"
      }
    }
  },
  balancePage: {
    showButton: {
      fontColor: "#fff",
      default: "#085375",
      hovered: "#032D44",
      focused: "#77A1B3"
    },
    exportButton: {
      fontColor: "#fff",
      default: "#085375",
      hovered: "#032D44",
      focused: "#77A1B3"
    },
    bankTransferButton: {
      fontColor: theme.palette.text.primary,
      default: "#D6E8E8",
      hovered: "#A1C6D2",
      focused: "#A1C6D2"
    },
    topUpBalanceButton: {
      fontColor: "#fff",
      default: "#FD9B27",
      hovered: "#EF6A3D",
      focused: "#ff2d37"
    },
    excelButton: {
      fontColor: "#fff",
      default: "#257247",
      hovered: "#234E45",
      focused: "#92AC90"
    }
  },
  pageHeader: {
    header: "#add1d2",
    loginButton: {
      fontColor: "#085375",
      default: "#CAE1E2",
      hovered: "#A1C6D2",
      focused: "#E5F0F1"
    },
    signUpButton: {
      fontColor: "#085375",
      default: "#CAEC8C",
      hovered: "#B6CF69",
      focused: "#E5F6C6"
    }
  },
  resetPasswordPage: {
    dialog: "#add1d2",
    textField: {
      background: "#FBF9F6"
    },
    button: {
      fontColor: "#fff",
      default: "#ff2d37",
      hovered: "#EF6A3D",
      disabled: "#ff2d37"
    }
  },
  loginDialog: {
    dialog: "grey",
    textField: {
      background: "#FBF9F6"
    },
    forgotPassword: {
      color: "#FBF9F6"
    },
    button: {
      fontColor: "#fff",
      default: "#ff2d37",
      hovered: "#EF6A3D",
      disabled: "#ff2d37"
    }
  },
  signUpDialog: {
    dialog: "grey",
    textField: {
      background: "#FBF9F6"
    },
    errorChip: {
      color: "#FBF9F6"
    },
    button: {
      fontColor: "#fff",
      default: "#ff2d37",
      hovered: "#EF6A3D",
      disabled: "#ff2d37"
    }
  }
};

const halfSpacingUnit = theme.spacing.unit / 2;

export default createMuiTheme({
  spacing: {
    halfUnit: halfSpacingUnit
  },
  typography: {
    useNextVariants: true
  },
  palette: {
    background: {
      default: "#fff"
    },
    custom: { ...colors }
  },
  shape: {
    borderRadius: theme.shape.borderRadius / 2
  },
  overrides: {
    MuiTableHead: {
      root: {
        background: colors.tableHeader,
        position: "sticky",
        top: "0",
        zIndex: 1
      }
    },
    MuiTableRow: {
      root: {
        height: "40px"
      },
      head: {
        height: "40px"
      }
    },
    MuiTableCell: {
      root: {
        borderBottomColor: "#ACD1D2",
        "&:last-child": {
          paddingRight: halfSpacingUnit
        }
      },
      body: {
        fontSize: theme.typography.pxToRem(12)
      },
      paddingDense: {
        padding: halfSpacingUnit,
        paddingRight: halfSpacingUnit
      },
      head: {
        color: theme.palette.text.primary,
        fontWeight: theme.typography.fontWeightRegular
      }
    },
    MuiButton: {
      root: {
        whiteSpace: "nowrap"
      },
      contained: {
        boxShadow: "none",
        "&$disabled": {
          backgroundColor: "#C4C6C8",
          color: "#fff"
        }
      }
    },
    MuiTab: {
      root: {
        cursor: "pointer",
        [theme.breakpoints.up("md")]: {
          fontSize: theme.typography.pxToRem(13),
          minWidth: 120
        }
      }
    },
    MuiPrivateTabIndicator: {
      root: {
        height: 0
      }
    },
    MuiPickersToolbar: {
      toolbar: {
        backgroundColor: "#fff"
      }
    },
    MuiPickersToolbarButton: {
      toolbarBtn: {
        color: theme.palette.text.primary
      },
      toolbarBtnSelected: {
        color: theme.palette.text.primary
      }
    },
    MuiPickersCalendarHeader: {
      switchHeader: {
        color: theme.palette.text.primary
      },
      dayLabel: {}
    },
    MuiPickersCalendar: {
      transitionContainer: {
        minHeight: "168px"
      }
    },
    MuiPickersDay: {
      day: {
        color: theme.palette.text.primary,
        borderRadius: "initial",
        height: "28px"
      },
      isSelected: {
        backgroundColor: "#085375"
      },
      current: {
        backgroundColor: "#add1d2",
        color: theme.palette.text.primary
      }
    },
    MuiCheckbox: {
      colorSecondary: {
        color: "#085375",
        "&$checked": {
          color: "#085375"
        }
      }
    }
  },
  props: {
    MuiTable: {
      padding: "dense"
    },
    MuiTableCell: {
      align: "center"
    },
    MuiTableRow: {},
    MuiInputBase: {
      margin: "dense"
    }
  },
  tableContainer: {
    display: "flex",
    alignItems: "flex-start",
    width: "100%",
    overflowX: "auto"
  }
});
