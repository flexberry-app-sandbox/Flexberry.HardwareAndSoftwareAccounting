﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.Hardware_and_Software_accounting
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    //  *** Start programmer edit section *** (Using statements)

    //  *** End programmer edit section *** (Using statements)


    /// <summary>
    /// Operations.
    /// </summary>
    //  *** Start programmer edit section *** (Operations CustomAttributes)

    //  *** End programmer edit section *** (Operations CustomAttributes)
    [AutoAltered()]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("OperationsE", new string[] {
            "Date as \'Date\'",
            "Action as \'Action\'",
            "State as \'State\'",
            "Hardware as \'Hardware\'",
            "Hardware.InventoryNumber as \'Inventory number\'",
            "Admin as \'Admin\'",
            "Admin.Name as \'Name\'"}, Hidden=new string[] {
            "Hardware.InventoryNumber",
            "Admin.Name"})]
    [MasterViewDefineAttribute("OperationsE", "Hardware", ICSSoft.STORMNET.LookupTypeEnum.Standard, "", "InventoryNumber")]
    [MasterViewDefineAttribute("OperationsE", "Admin", ICSSoft.STORMNET.LookupTypeEnum.Standard, "", "Name")]
    [View("OperationsL", new string[] {
            "Date as \'Date\'",
            "Action as \'Action\'",
            "State as \'State\'",
            "Hardware.InventoryNumber as \'Inventory number\'",
            "Admin.Name as \'Name\'"})]
    public class Operations : ICSSoft.STORMNET.DataObject
    {
        
        private System.DateTime fDate;
        
        private IIS.Hardware_and_Software_accounting.tAction fAction;
        
        private IIS.Hardware_and_Software_accounting.tState fState;
        
        private IIS.Hardware_and_Software_accounting.Hardware fHardware;
        
        private IIS.Hardware_and_Software_accounting.User fAdmin;
        
        //  *** Start programmer edit section *** (Operations CustomMembers)

        //  *** End programmer edit section *** (Operations CustomMembers)

        
        /// <summary>
        /// Date.
        /// </summary>
        //  *** Start programmer edit section *** (Operations.Date CustomAttributes)

        //  *** End programmer edit section *** (Operations.Date CustomAttributes)
        public virtual System.DateTime Date
        {
            get
            {
                //  *** Start programmer edit section *** (Operations.Date Get start)

                //  *** End programmer edit section *** (Operations.Date Get start)
                System.DateTime result = this.fDate;
                //  *** Start programmer edit section *** (Operations.Date Get end)

                //  *** End programmer edit section *** (Operations.Date Get end)
                return result;
            }
            set
            {
                //  *** Start programmer edit section *** (Operations.Date Set start)

                //  *** End programmer edit section *** (Operations.Date Set start)
                this.fDate = value;
                //  *** Start programmer edit section *** (Operations.Date Set end)

                //  *** End programmer edit section *** (Operations.Date Set end)
            }
        }
        
        /// <summary>
        /// Action.
        /// </summary>
        //  *** Start programmer edit section *** (Operations.Action CustomAttributes)

        //  *** End programmer edit section *** (Operations.Action CustomAttributes)
        public virtual IIS.Hardware_and_Software_accounting.tAction Action
        {
            get
            {
                //  *** Start programmer edit section *** (Operations.Action Get start)

                //  *** End programmer edit section *** (Operations.Action Get start)
                IIS.Hardware_and_Software_accounting.tAction result = this.fAction;
                //  *** Start programmer edit section *** (Operations.Action Get end)

                //  *** End programmer edit section *** (Operations.Action Get end)
                return result;
            }
            set
            {
                //  *** Start programmer edit section *** (Operations.Action Set start)

                //  *** End programmer edit section *** (Operations.Action Set start)
                this.fAction = value;
                //  *** Start programmer edit section *** (Operations.Action Set end)

                //  *** End programmer edit section *** (Operations.Action Set end)
            }
        }
        
        /// <summary>
        /// State.
        /// </summary>
        //  *** Start programmer edit section *** (Operations.State CustomAttributes)

        //  *** End programmer edit section *** (Operations.State CustomAttributes)
        public virtual IIS.Hardware_and_Software_accounting.tState State
        {
            get
            {
                //  *** Start programmer edit section *** (Operations.State Get start)

                //  *** End programmer edit section *** (Operations.State Get start)
                IIS.Hardware_and_Software_accounting.tState result = this.fState;
                //  *** Start programmer edit section *** (Operations.State Get end)

                //  *** End programmer edit section *** (Operations.State Get end)
                return result;
            }
            set
            {
                //  *** Start programmer edit section *** (Operations.State Set start)

                //  *** End programmer edit section *** (Operations.State Set start)
                this.fState = value;
                //  *** Start programmer edit section *** (Operations.State Set end)

                //  *** End programmer edit section *** (Operations.State Set end)
            }
        }
        
        /// <summary>
        /// Operations.
        /// </summary>
        //  *** Start programmer edit section *** (Operations.Hardware CustomAttributes)

        //  *** End programmer edit section *** (Operations.Hardware CustomAttributes)
        [NotNull()]
        public virtual IIS.Hardware_and_Software_accounting.Hardware Hardware
        {
            get
            {
                //  *** Start programmer edit section *** (Operations.Hardware Get start)

                //  *** End programmer edit section *** (Operations.Hardware Get start)
                IIS.Hardware_and_Software_accounting.Hardware result = this.fHardware;
                //  *** Start programmer edit section *** (Operations.Hardware Get end)

                //  *** End programmer edit section *** (Operations.Hardware Get end)
                return result;
            }
            set
            {
                //  *** Start programmer edit section *** (Operations.Hardware Set start)

                //  *** End programmer edit section *** (Operations.Hardware Set start)
                this.fHardware = value;
                //  *** Start programmer edit section *** (Operations.Hardware Set end)

                //  *** End programmer edit section *** (Operations.Hardware Set end)
            }
        }
        
        /// <summary>
        /// Operations.
        /// </summary>
        //  *** Start programmer edit section *** (Operations.Admin CustomAttributes)

        //  *** End programmer edit section *** (Operations.Admin CustomAttributes)
        [NotNull()]
        public virtual IIS.Hardware_and_Software_accounting.User Admin
        {
            get
            {
                //  *** Start programmer edit section *** (Operations.Admin Get start)

                //  *** End programmer edit section *** (Operations.Admin Get start)
                IIS.Hardware_and_Software_accounting.User result = this.fAdmin;
                //  *** Start programmer edit section *** (Operations.Admin Get end)

                //  *** End programmer edit section *** (Operations.Admin Get end)
                return result;
            }
            set
            {
                //  *** Start programmer edit section *** (Operations.Admin Set start)

                //  *** End programmer edit section *** (Operations.Admin Set start)
                this.fAdmin = value;
                //  *** Start programmer edit section *** (Operations.Admin Set end)

                //  *** End programmer edit section *** (Operations.Admin Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "OperationsE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View OperationsE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("OperationsE", typeof(IIS.Hardware_and_Software_accounting.Operations));
                }
            }
            
            /// <summary>
            /// "OperationsL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View OperationsL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("OperationsL", typeof(IIS.Hardware_and_Software_accounting.Operations));
                }
            }
        }
    }
}