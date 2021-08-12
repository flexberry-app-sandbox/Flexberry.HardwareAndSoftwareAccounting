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
    /// Branch office.
    /// </summary>
    //  *** Start programmer edit section *** (BranchOffice CustomAttributes)

    //  *** End programmer edit section *** (BranchOffice CustomAttributes)
    [AutoAltered()]
    [Caption("Branch office")]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("BranchOfficeE", new string[] {
            "Name as \'Name\'",
            "Address as \'Address\'"})]
    [View("BranchOfficeL", new string[] {
            "Name as \'Name\'",
            "Address as \'Address\'"})]
    public class BranchOffice : ICSSoft.STORMNET.DataObject
    {
        
        private string fName;
        
        private string fAddress;
        
        //  *** Start programmer edit section *** (BranchOffice CustomMembers)

        //  *** End programmer edit section *** (BranchOffice CustomMembers)

        
        /// <summary>
        /// Name.
        /// </summary>
        //  *** Start programmer edit section *** (BranchOffice.Name CustomAttributes)

        //  *** End programmer edit section *** (BranchOffice.Name CustomAttributes)
        [StrLen(255)]
        public virtual string Name
        {
            get
            {
                //  *** Start programmer edit section *** (BranchOffice.Name Get start)

                //  *** End programmer edit section *** (BranchOffice.Name Get start)
                string result = this.fName;
                //  *** Start programmer edit section *** (BranchOffice.Name Get end)

                //  *** End programmer edit section *** (BranchOffice.Name Get end)
                return result;
            }
            set
            {
                //  *** Start programmer edit section *** (BranchOffice.Name Set start)

                //  *** End programmer edit section *** (BranchOffice.Name Set start)
                this.fName = value;
                //  *** Start programmer edit section *** (BranchOffice.Name Set end)

                //  *** End programmer edit section *** (BranchOffice.Name Set end)
            }
        }
        
        /// <summary>
        /// Address.
        /// </summary>
        //  *** Start programmer edit section *** (BranchOffice.Address CustomAttributes)

        //  *** End programmer edit section *** (BranchOffice.Address CustomAttributes)
        [StrLen(255)]
        public virtual string Address
        {
            get
            {
                //  *** Start programmer edit section *** (BranchOffice.Address Get start)

                //  *** End programmer edit section *** (BranchOffice.Address Get start)
                string result = this.fAddress;
                //  *** Start programmer edit section *** (BranchOffice.Address Get end)

                //  *** End programmer edit section *** (BranchOffice.Address Get end)
                return result;
            }
            set
            {
                //  *** Start programmer edit section *** (BranchOffice.Address Set start)

                //  *** End programmer edit section *** (BranchOffice.Address Set start)
                this.fAddress = value;
                //  *** Start programmer edit section *** (BranchOffice.Address Set end)

                //  *** End programmer edit section *** (BranchOffice.Address Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "BranchOfficeE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View BranchOfficeE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("BranchOfficeE", typeof(IIS.Hardware_and_Software_accounting.BranchOffice));
                }
            }
            
            /// <summary>
            /// "BranchOfficeL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View BranchOfficeL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("BranchOfficeL", typeof(IIS.Hardware_and_Software_accounting.BranchOffice));
                }
            }
        }
    }
}